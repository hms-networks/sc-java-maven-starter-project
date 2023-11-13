import React, {
  useState,
  useEffect
} from 'react';

const cacheTimeoutDefaultMillis = 1000 * 60 * 60 * 6; // 6 hours
let cache = {};


const parseTagName = (tagName) => {
  // Remove leading "v" if present and followed by more characters
  if (tagName.startsWith("v") && tagName.length > 1) {
    return tagName.substring(1);
  }
  return tagName;
}

const useGitHubReleaseInfo = (owner, repo, cacheTimeoutMillis = cacheTimeoutDefaultMillis) => {
  // Build empty/initial releaseInfo object
  const [releaseInfo, setReleaseInfo] = useState({
    cacheUpdateTime: null,
    url: '',
    tagName: '',
    parsedTagName: '',
    totalDownloadCount: 0,
    rawApiData: {}
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Get latest release info from GitHub API
  useEffect(() => {
    const getCachedDataOrFetchLatest = async () => {
      // Update loading/error state
      setIsLoading(true);
      setError(null);

      // Get cache key and current time
      const cacheKey = `${owner}/${repo}`;
      const currentTime = new Date().getTime();

      // Check existing cache
      const cachedData = cache[cacheKey];
      const cacheValid = cachedData && ((currentTime - cachedData.cacheTime) < cacheTimeoutMillis);

      // If cache exists and is less than 6 hours old, return cached data
      if (cacheValid) {
        setReleaseInfo(cachedData);
        setIsLoading(false);
      }
      // Otherwise, fetch data from GitHub API
      else {
        try {
          // Get latest version JSON from GitHub API
          const controller = new AbortController();
          const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases/latest`, { signal: controller.signal });

          // Check response
          if (!response.ok) {
            const errorMsg = `Failed to fetch release info from GitHub API: ${response.status} ${response.statusText}`;
            console.error(errorMsg);
            setError(errorMsg);
            return; // Return early, don't waste browser time
          }

          // Build return data
          const responseData = await response.json();
          const returnData = {
            cacheTime: currentTime,
            url: responseData.html_url,
            tagName: responseData.tag_name,
            parsedTagName: parseTagName(responseData.tag_name),
            rawApiData: responseData
          };

          // Update cache
          cache[cacheKey] = returnData;

          // Update releaseInfo object
          setReleaseInfo(returnData);
        } catch (error) {
          if (!abortController.signal.aborted) {
            console.error("Failed to request latest release info from GitHub API", error);
            setError(error.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
    }

    getCachedDataOrFetchLatest();
    return () => {
      abortController.abort();
    };
  }, [owner, repo, cacheTimeoutMillis]);

  // Return releaseInfo object
  return { ...releaseInfo, isLoading, error };
}

export default useGitHubReleaseInfo;