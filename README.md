# Business Requirement

A cash register (POS) system is used in the store for the settlement of the store. This cashier will settle and print the receipt (Receipt) according to the item(Item) in the customer's shopping cart (Cart) at the time of settlement.

We need to implement a function called printReceipt, which can receive barcodes and then output the text of the receipt.

This time, the input will be an array of barcodes (string). For example:
```json
[
  "ITEM000000",
  "ITEM000000",
  "ITEM000000",
  "ITEM000000",
  "ITEM000000",
  "ITEM000001",
  "ITEM000001",
  "ITEM000004"
]
```

Then the output should be
```
***<store earning no money>Receipt ***
Name: Coca-Cola, Quantity: 5, Unit price: 3 (yuan), Subtotal: 15 (yuan)
Name: Sprite, Quantity: 2, Unit price: 3 (yuan), Subtotal: 6 (yuan)
Name: Battery, Quantity: 1, Unit price: 2 (yuan), Subtotal: 2 (yuan)
----------------------
Total: 23 (yuan)
**********************
```

Suppose that :
```json
[
   {
      "barcode": "ITEM000000",
      "name": "Coca-Cola",
      "price": 3
    },
    {
      "barcode": "ITEM000001",
      "name": "Sprite",
      "price": 3
    },
    {
      "barcode": "ITEM000002",
      "name": "Apple",
      "price": 5
    },
    {
      "barcode": "ITEM000003",
      "name": "Litchi",
      "price": 15
    },
    {
      "barcode": "ITEM000004",
      "name": "Battery",
      "price": 2
    },
    {
      "barcode": "ITEM000005",
      "name": "Instant Noodles",
      "price": 4
    }
]
```

# Practice Requirement

1. Please draw the whole tasking diagram.
2. Please declare all the functions according to your diagram.
3. Please write a test case following given...when...then pattern for a leaf
   block of the diagram. Then implement the block to pass the test.
4. Please repeat step 3 until all functions are implemented.
