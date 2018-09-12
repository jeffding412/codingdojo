//
//  TableViewCell.swift
//  BinaryCounter
//
//  Created by Jeffrey Ding on 9/12/18.
//  Copyright © 2018 Jeffrey Ding. All rights reserved.
//

import UIKit

class TableViewCell: UITableViewCell {
    weak var delegate: TableViewCellDelegate?
    var magnitude: Int?
    
    @IBAction func addButton(_ sender: UIButton) {
        magnitude = Int(magnitudeLabel.text!)!
//        print(magnitude!+1)
        delegate?.addTotal(self)
    }
    @IBAction func minusButton(_ sender: UIButton) {
        magnitude = Int(magnitudeLabel.text!)!
//        print(magnitude!+1)
        delegate?.minusTotal(self)
    }
    @IBOutlet weak var magnitudeLabel: UILabel!
}
