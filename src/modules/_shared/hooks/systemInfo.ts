import platform from 'platform'

export function systemInfo(){
    const operatingSystem = platform.os?.family;
    const browser = platform.name
    const version = platform.version
    return {operatingSystem, browser, version}
}