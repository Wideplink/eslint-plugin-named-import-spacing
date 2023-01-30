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
            type: "Docs",
            scope: "README",
            release: "patch"
          },
          {
            type: "Fix",
            release: "patch"
          },
          {
            type: "Chore",
            release: "patch"
          },
          {
            type: "Feat",
            release: "minor"
          },
          {
            type: "Perf",
            release: "patch"
          },
          {
            type: "Improve",
            release: "patch"
          },
          {
            type: "Change",
            release: "minor"
          },
          {
            type: "Update",
            release: false
          },
          {
            type: "Add",
            release: false
          },
          {
            type: "Remove",
            release: "minor"
          },
          {
            type: "Rename",
            release: false
          },
          {
            type: "Revert",
            release: "minor"
          },
          {
            scope: "no-release",
            release: false
          }
        ]
      }
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        presetConfig: {
          types: [
            {
              type: "Docs",
              section: "Documentation"
            },
            {
              type: "Fix",
              section: "Bug fixes"
            },
            {
              type: "Chore",
              hidden: "Chore"
            },
            {
              type: "Feat",
              section: "Features"
            },
            {
              type: "Perf",
              section: "Improvements"
            },
            {
              type: "Improve",
              section: "Improvements"
            },
            {
              type: "Change",
              section: "Changes"
            },
            {
              type: "Update",
              hidden: true
            },
            {
              type: "Add",
              hidden: true
            },
            {
              type: "Remove",
              section: "Changes"
            },
            {
              type: "Rename",
              hidden: true
            },
            {
              type: "Revert",
              section: "Changes"
            }
          ]
        }
      }
    ],
    "@semantic-release/npm",
    [
      "@semantic-release/github",
      {
        addReleases: "bottom"
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
