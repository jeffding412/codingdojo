//
//  TableViewCellDelegate.swift
//  BinaryCounter
//
//  Created by Jeffrey Ding on 9/12/18.
//  Copyright © 2018 Jeffrey Ding. All rights reserved.
//

import UIKit

protocol TableViewCellDelegate: class {
    func addTotal(_ sender: TableViewCell)
    func minusTotal(_ sender: TableViewCell)
}
