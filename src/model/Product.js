/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Product model module.
 * @module model/Product
 * @version 1.0.0
 */
class Product {
    /**
     * Constructs a new <code>Product</code>.
     * @alias module:model/Product
     * @param ptitle {String} 
     * @param pprice {String} 
     */
    constructor(ptitle, pprice) { 
        
        Product.initialize(this, ptitle, pprice);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ptitle, pprice) { 
        obj['ptitle'] = ptitle;
        obj['pprice'] = pprice;
    }

    /**
     * Constructs a <code>Product</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Product} obj Optional instance to populate.
     * @return {module:model/Product} The populated <code>Product</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Product();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('ptitle')) {
                obj['ptitle'] = ApiClient.convertToType(data['ptitle'], 'String');
            }
            if (data.hasOwnProperty('pprice')) {
                obj['pprice'] = ApiClient.convertToType(data['pprice'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Product.prototype['_id'] = undefined;

/**
 * @member {String} ptitle
 */
Product.prototype['ptitle'] = undefined;

/**
 * @member {String} pprice
 */
Product.prototype['pprice'] = undefined;






export default Product;

