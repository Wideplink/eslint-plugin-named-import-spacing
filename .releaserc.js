module.exports = {
  branches: [
    "main",
    {
      name: "develop",
      channel: "dev",
    }
  ],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        releaseRules: [
          {
            "type": "Docs",
            "scope": "README",
            "release": "patch"
          },
          {
            "type": "Fix",
            "release": "patch"
          },
          {
            "type": "Chore",
            "release": "patch"
          },
          {
            "type": "Feat",
            "release": "minor"
          },
          {
            "type": "Perf",
            "release": "patch"
          },
          {
            "type": "Improve",
            "release": "patch"
          },
          {
            "type": "Change",
            "release": "minor"
          },
          {
            "type": "Update",
            "release": false
          },
          {
            "type": "Add",
            "release": "minor"
          },
          {
            "type": "Remove",
            "release": "minor"
          },
          {
            "type": "Rename",
            "release": false
          },
          {
            "type": "Revert",
            "release": "minor"
          },
          {
            "scope": "no-release",
            "release": false
          }
        ]
      }
    ],
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    [
      "@semantic-release/github",
      {
        "addReleases": "bottom"
      }
    ]
  ],
  parserOpts: {
    noteKeywords: [
      "BREAKING CHANGE",
      "BREAKING CHANGES",
      "BREAKING"
    ]
  }
}