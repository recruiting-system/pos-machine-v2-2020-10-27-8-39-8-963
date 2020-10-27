import {Pos} from '../src/Pos'

describe('Pos', () => {
  it('should return receipt given cola*5, sprite*2 and battery*3', () => {
    const pos = new Pos()
    const receipt = `
      ***<store earning no money>Receipt ***
      Name: Coca-Cola, Quantity: 6, Unit price: 3 (yuan), Subtotal: 15 (yuan)
      Name: Sprite, Quantity: 2, Unit price: 3 (yuan), Subtotal: 6 (yuan)
      Name: Battery, Quantity: 1, Unit price: 2 (yuan), Subtotal: 2 (yuan)
      ----------------------
      Total: 23 (yuan)
      **********************`
    const barcodes = [
      'ITEM000000',
      'ITEM000000',
      'ITEM000000',
      'ITEM000000',
      'ITEM000000',
      'ITEM000001',
      'ITEM000001',
      'ITEM000004',
    ]
    expect(pos.printReceipt(barcodes)).toEqual(receipt)
  })
})
