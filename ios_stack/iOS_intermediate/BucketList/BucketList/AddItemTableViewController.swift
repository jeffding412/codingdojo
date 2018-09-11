//
//  AddItemTableViewController.swift
//  BucketList
//
//  Created by Jeffrey Ding on 9/11/18.
//  Copyright © 2018 Jeffrey Ding. All rights reserved.
//

import UIKit

class AddItemTableViewController: UITableViewController {
    weak var delegate: AddItemTableViewControllerDelegate?
    var item: String?
    var indexPath: NSIndexPath?
    
    @IBOutlet weak var itemTextField: UITextField!
    
    @IBAction func cancelButtonPressed(_ sender: UIBarButtonItem) {
        delegate?.cancelButtonPressed(by: self)
    }
    @IBAction func doneButtonPressed(_ sender: UIBarButtonItem) {
        let text = itemTextField.text!
        delegate?.itemSaved(by: self, with: text, at: indexPath)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        itemTextField.text = item
    }
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
}
