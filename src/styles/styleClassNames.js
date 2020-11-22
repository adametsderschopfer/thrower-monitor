const styleClassNames = Object.create({})

styleClassNames.main = "ThrowerMonitor"
styleClassNames.container = `${styleClassNames.main}-container`
styleClassNames.monitor = `${styleClassNames.main}-monitor`
styleClassNames.upper_shellContainer = `${styleClassNames.main}-upper_shell-container`
styleClassNames.upper_shell = `${styleClassNames.main}-upper_shell`
styleClassNames.type = `${styleClassNames.main}-type`
styleClassNames.description = `${styleClassNames.main}-description`
styleClassNames.content = `${styleClassNames.main}-content`

export default Object.freeze(styleClassNames)
