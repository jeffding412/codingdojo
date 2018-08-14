class Product:
    def __init__(self,price,item_name, weight, brand):
        self.price = price
        self.item_name = item_name
        self.weight = weight
        self.brand = brand
        self.status = "for sale"

    def sell(self):
        self.status = "sold"
        return self

    def add_tax(self, tax):
        return (1+tax)*self.price

    def return_item(self, reason_for_return):
        if reason_for_return == "defective":
            self.status = "defective"
            self.price = 0
        elif reason_for_return == "like new":
            self.status = "for sale"
        elif reason_for_return == "opened":
            self.status = "used"
            self.price *= 0.8
        return self

    def display_info(self):
        print("Price:", self.price)
        print("Item Name:", self.item_name)
        print("Weight:", self.weight)
        print("Brand:", self.brand)
        print("Status:", self.status)
        return self