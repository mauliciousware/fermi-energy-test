const shell = require("shelljs");
const tmp = require("tmp");

function copyRepoContent(repo_url, repo_dir, target_dir) {
  if (!repo_dir || !target_dir) {
    console.log("Both repo_dir and target_dir must be specified. Exiting.");
    process.exit();
  }

  let sourceDir;

  if (repo_url) {
    // Create a temporary directory for cloning
    const tempDir = tmp.dirSync({ unsafeCleanup: true });

    if (!tempDir) {
      console.error("Failed to create temporary directory. Exiting.");
      process.exit(1);
    }

    // Clone the repository into the temporary directory
    if (shell.exec(`git clone "${repo_url}" "${tempDir.name}"`).code !== 0) {
      console.error("Failed to clone repository. Exiting.");
      tempDir.removeCallback(); // Cleanup the temporary directory
      process.exit(1);
    }

    // Set the source directory path to the specified directory within the cloned repository
    sourceDir = `${tempDir.name}/${repo_dir}`;
  } else {
    // If no repo_url is provided, use the repo_dir as the source directory from the current working directory
    sourceDir = repo_dir;
  }

  if (!shell.test("-e", sourceDir)) {
    console.error(`The directory ${repo_dir} does not exist. Exiting.`);
    if (repo_url) {
      tmp.dirSync({ unsafeCleanup: true }).removeCallback(); // Clean up temp dir if it was created
    }
    process.exit(1);
  }

  const targetPath = `${shell.pwd().stdout}/${target_dir}`;

  if (shell.test("-e", targetPath)) {
    // Remove the existing target directory
    console.log(`Removing existing directory: ${targetPath}`);
    shell.rm("-rf", targetPath);
  }

  // Copy the entire directory to the target location
  shell.cp("-r", sourceDir, targetPath);

  // Remove the temporary directory if it was created
  if (repo_url) {
    tmp.dirSync({ unsafeCleanup: true }).removeCallback();
  }

  console.log(`Copied ${repo_dir} to ${target_dir}`);
}

// const DOCS_REPO_URL = "https://github.com/devtodollars/mvp-boilerplate.git";
// const BLOG_REPO_URL =
//   "https://github.com/devtodollars/devtodollars-resources.git";

// // Copy content to the 'docs' directory
// copyRepoContent(DOCS_REPO_URL, "docs", "docs");

// // Copy content to the 'blog' directory
// copyRepoContent(BLOG_REPO_URL, "blog", "blog");
