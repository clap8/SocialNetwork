import convict from 'convict';
 
var config = convict({
  env: {
    doc: "The application environment.",
    format: ["production", "development", "test"],
    default: "development",
    env: "NODE_ENV"
  },
  ip: {
    doc: "The IP address to bind.",
    format: "ipaddress",
    default: "127.0.0.1",
    env: "IP_ADDRESS",
  },
  port: {
    doc: "The port to bind.",
    format: "port",
    default: 3000,
    env: "PORT",
    arg: "port"
  },
  db: {
    host: {
      doc: "Database host name/IP",
      format: '*',
      default: 'localhost'
    },
    name: {
      doc: "Database name",
      format: String,
      default: 'go-irl'
    },
    debug: {
      doc: "Database debug enable",
      format: Boolean,
      default: false
    }
  },
  authentication: {
    google: {
      clientId: {
        doc: "Client identifiant",
        format: String,
        default: ""
      },
      clientSecret: {
        doc: "Client secret key",
        format: String,
        default: ""
      }
    },
    token: {
      secret: {
        doc: "Secret JWT cipher key",
        format: String,
        default: "secretkey",
      },
      issuer: {
        doc: "Service issuer",
        format: String,
        default: ""
      },
      audience: {
        doc: "Service audience",
        format: String,
        default: "",
      }
    }
  }
});
 
// Load environment dependent configuration
// var env = config.get('env');
// config.loadFile('./src/config/' + env + '.json');
 
// Perform validation
config.validate({allowed: 'strict'});
 
export default config;