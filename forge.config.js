module.exports = {
  packagerConfig: {
    icon: './images/512x512@2x',
    name: 'ytv',
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        setupExe: 'ytv-setup.exe',
        usePackageJson: true,
        loadingGif: './images/loading.gif',
      },
    },
    {
      name: '@electron-forge/maker-zip',
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          maintainer: 'Gleb Sakharov',
          homepage: 'https://github.com/skhrvg/ytv',
          section: 'video',
          icon: './images/512x512@2x.png',
          categories: ['Video'],
        }
      }
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        format: 'ULFO',
        icon: './images/dmg.icns',
        background: './images/dmg.png',
      }
    }
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'skhrvg',
          name: 'ytv',
        },
        prerelease: false,
        draft: true,
      },
    },
  ],
};
