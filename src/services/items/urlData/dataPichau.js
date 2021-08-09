import { post } from 'axios'

const getApiData = (url, productSku) => {
  return post(url, {
    operationName: 'productDetail',
    variables: {
      sku: productSku
    },
    query: 'query productDetail($sku: String) {\n  productDetail: products(filter: {sku: {eq: $sku}}) {\n    items {\n      __typename\n      sku\n      name\n      only_x_left_in_stock\n      stock_status\n      special_price\n      price_range {\n        minimum_price {\n          final_price {\n            currency\n            value\n            __typename\n          }\n          regular_price {\n            currency\n            value\n            __typename\n          }\n          __typename\n        }\n        maximum_price {\n          final_price {\n            currency\n            value\n            __typename\n          }\n          regular_price {\n            currency\n            value\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      ... on SimpleProduct {\n        options {\n          option_id\n          required\n          title\n          sort_order\n          __typename\n          ... on CustomizableRadioOption {\n            value {\n              price\n              price_type\n              sku\n              uid\n              title\n              option_type_id\n              __typename\n            }\n            __typename\n          }\n          ... on CustomizableMultipleOption {\n            value {\n              price\n              price_type\n              sku\n              uid\n              title\n              option_type_id\n              __typename\n            }\n            __typename\n          }\n          ... on CustomizableDropDownOption {\n            value {\n              price\n              price_type\n              sku\n              uid\n              title\n              option_type_id\n              __typename\n            }\n            __typename\n          }\n          ... on CustomizableCheckboxOption {\n            value {\n              price\n              price_type\n              sku\n              uid\n              title\n              option_type_id\n              __typename\n            }\n            __typename\n          }\n        }\n        __typename\n      }\n    }\n    __typename\n  }\n}\n'
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export {
  getApiData
}
