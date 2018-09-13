//
//  AddItemViewController.swift
//  ToDoList
//
//  Created by Jeffrey Ding on 9/12/18.
//  Copyright © 2018 Jeffrey Ding. All rights reserved.
//

import UIKit

class AddItemViewController: UIViewController {

    weak var delegate: AddItemButtonDelegate?
    
    @IBOutlet weak var titleTextField: UITextField!
    @IBOutlet weak var detailsTextView: UITextView!
    @IBOutlet weak var dateDatePicker: UIDatePicker!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    @IBAction func addItemButtonPressed(_ sender: UIButton) {
        let myDatePicker = dateDatePicker.date
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "MM/dd/yyyy"
        let selectedDate = dateFormatter.string(from: myDatePicker)
        let item = [
            "title":titleTextField.text!,
            "date":selectedDate,
            "details":detailsTextView.text!,
            "checked":"false"
        ]
        delegate?.addItemButtonPressed(by: self, with: item)
    }
}
