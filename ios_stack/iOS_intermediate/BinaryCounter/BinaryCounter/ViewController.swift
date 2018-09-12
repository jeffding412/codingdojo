//
//  ViewController.swift
//  BinaryCounter
//
//  Created by Jeffrey Ding on 9/12/18.
//  Copyright © 2018 Jeffrey Ding. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    var magnitudes = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1000000000000, 10000000000000, 100000000000000, 1000000000000000]
    var total = 0;
    @IBOutlet weak var tableView: UITableView!
    override func viewDidLoad() {
        super.viewDidLoad()
        totalLabel.text = "Total: \(total)"
        tableView.dataSource = self
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    @IBOutlet weak var totalLabel: UILabel!
}

extension ViewController: UITableViewDataSource, TableViewCellDelegate {
    func addTotal(_ sender: TableViewCell) {
        total += sender.magnitude!
        totalLabel.text = "Total: \(total)"
    }
    
    func minusTotal(_ sender: TableViewCell) {
        total -= sender.magnitude!
        totalLabel.text = "Total: \(total)"
    }
    
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return magnitudes.count
    }
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "MyCell") as! TableViewCell
        cell.magnitudeLabel.text = "\(magnitudes[indexPath.row])"
        cell.delegate = self
        // return cell so that Table View knows what to render in each row
        return cell
    }
}
