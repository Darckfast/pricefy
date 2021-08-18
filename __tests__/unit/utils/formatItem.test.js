import { formatItem } from '../../../src/services/utils/formatItem'

test('should create entry for database', () => {
  const product = {
    productId: 1,
    productPrice: 1100,
    store: 'my-store',
    description: 'my product'
  }

  const formattedItem = formatItem(product)

  expect(formattedItem).not.toBeUndefined
  expect(formattedItem.store).toBe(product.store)
  expect(formattedItem.price).toBe(product.productPrice)
  expect(formattedItem.description).toBe(product.description)
  expect(formattedItem.date).not.toBeUndefined
  expect(formattedItem.productId).toBe('1')
})
