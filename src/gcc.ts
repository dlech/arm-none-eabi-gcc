const versions: {[key: string]: string} = {
  '11.3.rel1':
    'https://developer.arm.com/-/media/Files/downloads/gnu/11.3.rel1/binrel/arm-gnu-toolchain-11.3.rel1-${ARCH_OS_2}-arm-none-eabi.${EXT2}',
  '11.2-2022.02':
    'https://developer.arm.com/-/media/Files/downloads/gnu/11.2-2022.02/binrel/gcc-arm-11.2-2022.02-${ARCH_OS_2}-arm-none-eabi.${EXT2}',
  '10-2020-q4':
    'https://developer.arm.com/-/media/Files/downloads/gnu-rm/10-2020q4/gcc-arm-none-eabi-10-2020-q4-major-${ARCH_OS}.${EXT}',
  '9-2020-q2':
    'https://developer.arm.com/-/media/Files/downloads/gnu-rm/9-2020q2/gcc-arm-none-eabi-9-2020-q2-update-${ARCH_OS}.${EXT}',
  '9-2019-q4':
    'https://developer.arm.com/-/media/Files/downloads/gnu-rm/9-2019q4/gcc-arm-none-eabi-9-2019-q4-major-${ARCH_OS}.${EXT}',
  '8-2019-q3':
    'https://developer.arm.com/-/media/Files/downloads/gnu-rm/8-2019q3/RC1.1/gcc-arm-none-eabi-8-2019-q3-update-${OS}.${EXT}',
  '8-2018-q4':
    'https://developer.arm.com/-/media/Files/downloads/gnu-rm/8-2018q4/gcc-arm-none-eabi-8-2018-q4-major-${OS}.${EXT}',
  '7-2018-q2':
    'https://developer.arm.com/-/media/Files/downloads/gnu-rm/7-2018q2/gcc-arm-none-eabi-7-2018-q2-update-${OS}.${EXT}',
  '7-2017-q4':
    'https://developer.arm.com/-/media/Files/downloads/gnu-rm/7-2017q4/gcc-arm-none-eabi-7-2017-q4-major-win32-${OS}.${EXT}',
  '6-2017-q2':
    'https://developer.arm.com/-/media/Files/downloads/gnu-rm/6-2017q2/gcc-arm-none-eabi-6-2017-q2-update-${OS}.${EXT}',
  '6-2017-q1':
    'https://developer.arm.com/-/media/Files/downloads/gnu-rm/6_1-2017q1/gcc-arm-none-eabi-6-2017-q1-update-${OS}${WIN_EXTRA_EXT}.${EXT}',
  '6-2016-q4':
    'https://developer.arm.com/-/media/Files/downloads/gnu-rm/6-2016q4/gcc-arm-none-eabi-6_2-2016q4-20161216-${OS}${WIN_EXTRA_EXT}.${EXT}',
  '5-2016-q3':
    'https://launchpad.net/gcc-arm-embedded/5.0/5-2016-q3-update/+download/gcc-arm-none-eabi-5_4-2016q3-20160926-${OS}.${EXT}',
  '5-2016-q2':
    'https://launchpad.net/gcc-arm-embedded/5.0/5-2016-q2-update/+download/gcc-arm-none-eabi-5_4-2016q2-20160622-${OS}.${EXT}',
  '5-2016-q1':
    'https://launchpad.net/gcc-arm-embedded/5.0/5-2016-q1-update/+download/gcc-arm-none-eabi-5_3-2016q1-20160330-${OS}.${EXT}',
  '5-2015-q4':
    'https://launchpad.net/gcc-arm-embedded/5.0/5-2015-q4-major/+download/gcc-arm-none-eabi-5_2-2015q4-20151219-${OS}.${EXT}',
  '4.9-2015-q3':
    'https://launchpad.net/gcc-arm-embedded/4.9/4.9-2015-q3-update/+download/gcc-arm-none-eabi-4_9-2015q3-20150921-${OS}.${EXT}',
  '4.9-2015-q2':
    'https://launchpad.net/gcc-arm-embedded/4.9/4.9-2015-q2-update/+download/gcc-arm-none-eabi-4_9-2015q2-20150609-${OS}.${EXT}',
  '4.9-2015-q1':
    'https://launchpad.net/gcc-arm-embedded/4.9/4.9-2015-q1-update/+download/gcc-arm-none-eabi-4_9-2015q1-20150306-${OS}.${EXT}',
  '4.9-2014-q4':
    'https://launchpad.net/gcc-arm-embedded/4.9/4.9-2014-q4-major/+download/gcc-arm-none-eabi-4_9-2014q4-20141203-${OS}.${EXT}',
  '4.8-2014-q3':
    'https://launchpad.net/gcc-arm-embedded/4.8/4.8-2014-q3-update/+download/gcc-arm-none-eabi-4_8-2014q3-20140805-${OS}.${EXT}',
  '4.8-2014-q2':
    'https://launchpad.net/gcc-arm-embedded/4.8/4.8-2014-q2-update/+download/gcc-arm-none-eabi-4_8-2014q2-20140609-${OS}.${EXT}',
  '4.8-2014-q1':
    'https://launchpad.net/gcc-arm-embedded/4.8/4.8-2014-q1-update/+download/gcc-arm-none-eabi-4_8-2014q1-20140314-${OS}.${EXT}',
  '4.7-2014-q2':
    'https://launchpad.net/gcc-arm-embedded/4.7/4.7-2014-q2-update/+download/gcc-arm-none-eabi-4_7-2014q2-20140408-${OS}.${EXT}',
  '4.8-2013-q4':
    'https://launchpad.net/gcc-arm-embedded/4.8/4.8-2013-q4-major/+download/gcc-arm-none-eabi-4_8-2013q4-20131204-${OS}.${EXT}',
  '4.7-2013-q3':
    'https://launchpad.net/gcc-arm-embedded/4.7/4.7-2013-q3-update/+download/gcc-arm-none-eabi-4_7-2013q3-20130916-${OS}.${EXT}',
  '4.7-2013-q2':
    'https://launchpad.net/gcc-arm-embedded/4.7/4.7-2013-q2-update/+download/gcc-arm-none-eabi-4_7-2013q2-20130614-${OS}.${EXT}',
  '4.7-2013-q1':
    'https://launchpad.net/gcc-arm-embedded/4.7/4.7-2013-q1-update/+download/gcc-arm-none-eabi-4_7-2013q1-20130313-${OS}.${EXT}',
  '4.7-2012-q4':
    'https://launchpad.net/gcc-arm-embedded/4.7/4.7-2012-q4-major/+download/gcc-arm-none-eabi-4_7-2012q4-20121208-${OS}.${EXT}',
}

export function availableVersions(): string[] {
  return Object.keys(versions)
}

// Version must have the form major[._minor]-YYYY-qZ
export function distributionUrl(version: string, platform: string): string {
  let osName: string
  let archOs: string
  let archOs2: string
  let ext: string
  let ext2: string
  let winExtraExt = ''
  switch (platform) {
    case 'darwin':
      osName = 'mac'
      archOs = 'mac'
      archOs2 = 'darwin-x86_64'
      ext = 'tar.bz2'
      ext2 = 'tar.xz'
      break
    case 'linux':
      osName = 'linux'
      archOs = 'x86_64-linux'
      archOs2 = 'x86_64'
      ext = 'tar.bz2'
      ext2 = 'tar.xz'
      break
    case 'win32':
      osName = 'win32'
      archOs = 'win32'
      archOs2 = 'mingw-w64-i686'
      ext = 'zip'
      ext2 = 'zip'
      winExtraExt = '-zip'
      break
    default:
      throw new Error(`platform ${platform} is not supported`)
  }
  if (!availableVersions().includes(version)) {
    throw new Error(`invalid version ${version}. Available: ${availableVersions()}`)
  }
  const url = versions[version]
  if (!url) {
    throw new Error(`gcc version ${version} is not supported`)
  }
  return url.replace(/\$\{(.*?)\}/g, (_, p1) => {
    switch (p1) {
      case 'OS':
        return osName
      case 'ARCH_OS':
        return archOs
      case 'ARCH_OS_2':
        return archOs2
      case 'EXT':
        return ext
      case 'EXT2':
        return ext2
      case 'WIN_EXTRA_EXT':
        return winExtraExt
    }
    throw new Error(`unknown replacement ${p1}`)
  })
}
