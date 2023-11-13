import React from "react";
import useGitHubReleaseInfo from "./useGitHubReleaseInfo";

const styles = {
  container: {
    display: "flex", // Use flexbox for layout
    fontFamily: "Arial, sans-serif", // Use Arial font for appearance and readability
  },
  label: {
    padding: "0.25em", // Set padding to 0.25em for appearance
    backgroundColor: "#D3D3D3", // Set background to medium gray for appearance
    fontSize: "0.8em", // Set font size to 0.8em for readability
    borderRadius: "0.5em 0 0 0.5em", // Add curved border/edge on right side for appearance
    boxSizing: "border-box", // Include border in width/height calculations
    display: "flex", // Use flexbox for layout
    alignItems: "center", // Center text vertically for appearance
  },
  versionContainer: (isLoading, error) => ({
    padding: "0.25em", // Set padding to 0.25em for appearance
    backgroundColor: isLoading ? "#FFFF00" : error ? "#FF6347" : "#32CD32", // Set background to green/yellow/red for appearance
    borderRadius: "0 0.5em 0.5em 0", // Add curved border/edge on right side for appearance
    boxSizing: "border-box", // Include border in width/height calculations
    display: "flex", // Use flexbox for layout
    alignItems: "center", // Center text vertically for appearance
  }),
  version: (isLoading, error) => ({
    fontSize: "0.8em", // Set font size to 0.8em for readability
    color: isLoading || error ? "black" : "white", // Set text to black/white for appearance
    textDecoration: "none", // Remove underline of link for appearance
    display: 'inline', // Use inline display for layout
    margin: 0, // Remove margin for appearance
    padding: 0, // Remove padding for appearance
  }),
};

const LatestVersionDisplay = ({ owner, repo }) => {
  const latestVersionData = useGitHubReleaseInfo(owner, repo);
  const versionNumberComponent = latestVersionData.isLoading ? (
    <p
      style={styles.version(
        latestVersionData.isLoading,
        latestVersionData.error,
      )}
    >{'Loading...'}</p>
  ) : latestVersionData.error ? (
    <p
      style={styles.version(
        latestVersionData.isLoading,
        latestVersionData.error,
      )}
    >{'Error'}</p>
  ) : (
    <a
      style={styles.version(
        latestVersionData.isLoading,
        latestVersionData.error,
      )}
      href={latestVersionData.url}
    >
      {latestVersionData.parsedTagName}
    </a>
  );
  return (
    <div style={styles.container}>
      <div style={styles.label}>Latest Version:</div>
      <div
        style={styles.versionContainer(
          latestVersionData.isLoading,
          latestVersionData.error,
        )}
      >
        {versionNumberComponent}
      </div>
    </div>
  );
};

export default LatestVersionDisplay;
