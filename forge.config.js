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
};
