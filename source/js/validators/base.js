class BaseValidator {
  validate(schema, object, isPrimitiveType = false) {
    let isValid = true;
    if (isPrimitiveType) {
      if (typeof object !== schema.type) { // eslint-disable-line
        isValid = false;
        throw new Error(`Field in a child array is not a ${ schema.type }`);
      }
    } else {
      Object.keys(schema).forEach(key => {
        if (typeof object[key] !== 'undefined' && object[key] !== null) {
          const type = schema[key].type;
          if (typeof object[key] !== type) { // eslint-disable-line
            isValid = false;
            throw new Error(`Field: "${ key }" is not a ${ type }`);
          }
          if (schema[key].properties) {
            isValid = this.validate(schema[key].properties, object[key]);
          }
          if (schema[key].isArray) {
            for (let i = 0; i < object[key].length; i++) {
              if (schema[key].item.properties) {
                isValid = this.validate(schema[key].item.properties, object[key][i]);
              } else {
                isValid = this.validate(schema[key].item, object[key][i], true);
              }
            }
          }
        } else if (!schema[key].optional) {
          throw new Error(`Schema defined field: "${ key }" not found.`);
          isValid = false;
        }
      });
    }
    return isValid;
  }
}

export default BaseValidator;
