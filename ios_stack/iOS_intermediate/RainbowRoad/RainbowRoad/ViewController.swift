//
//  ViewController.swift
//  RainbowRoad
//
//  Created by Jeffrey Ding on 9/6/18.
//  Copyright © 2018 Jeffrey Ding. All rights reserved.
//

import UIKit

var colors: [UIColor] = [.red, .orange, .yellow, .green, .blue, .purple]
class ViewController: UIViewController {

    @IBOutlet weak var tableView: UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        tableView.dataSource = self
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

extension ViewController: UITableViewDataSource {
    // MAKE SURE THESE ARE WITHIN UITableViewDataSource EXTENSION!
    // How many cells are we going to need?
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        // return an integer that indicates how many rows (cells) to draw
        return colors.count
    }
    // How should I create each cell?
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        // Get the UITableViewCell and create/populate it with data then return it
        let cell = tableView.dequeueReusableCell(withIdentifier: "MyCell", for: indexPath)
        // set text label to the model that is corresponding to the row in array
        cell.textLabel?.text = "hello"
        cell.backgroundColor = colors[indexPath.row]
        // return cell so that Table View knows what to render in each row
        return cell
    }
}
