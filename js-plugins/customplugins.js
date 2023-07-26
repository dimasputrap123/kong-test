class CustomPlugins {
    constructor(config) {
      this.config = config
    }
    async access(kong) {
     kong.log.alert("test access custom plugin");
     console.log('tes123')
    }
  }
  
  module.exports = {
    Plugin: CustomPlugins,
    Schema: [
      { message: { type: "string" } },
    ],
    Version: '0.1.0',
    Priority: 100,
  }