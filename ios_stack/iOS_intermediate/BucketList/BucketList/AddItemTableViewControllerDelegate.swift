//
//  AddItemTableViewControllerDelegate.swift
//  BucketList
//
//  Created by Jeffrey Ding on 9/11/18.
//  Copyright © 2018 Jeffrey Ding. All rights reserved.
//

import UIKit
protocol AddItemTableViewControllerDelegate: class {
    func itemSaved(by controller: AddItemTableViewController, with text: String, at indexPath: NSIndexPath?)
    func cancelButtonPressed(by controller: AddItemTableViewController)
}
