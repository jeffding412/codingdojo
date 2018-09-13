//
//  ViewController.swift
//  ToDoList
//
//  Created by Jeffrey Ding on 9/12/18.
//  Copyright © 2018 Jeffrey Ding. All rights reserved.
//

import UIKit

class ToDoListViewController: UITableViewController, AddItemButtonDelegate {
    

    var items = [
        ["title":"Go to the moon",
         "date":"12/12/2016",
         "details":"With my friends",
         "checked":"false"],
        ["title":"Eat a candy bar",
         "date":"12/20/2016",
         "details":"Snickers bar",
         "checked":"true"],
        ["title":"Swim in the Amazon",
         "date":"12/18/2016",
         "details":"Bring suit",
         "checked":"true"],
        ["title":"Fry Chicken",
         "date":"12/12/2016",
         "details":"Chicken wings",
         "checked":"false"]
    ]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return items.count
    }
    
    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        if items[indexPath.row]["checked"] == "true" {
            items[indexPath.row]["checked"] = "false"
        }
        else {
            items[indexPath.row]["checked"] = "true"
        }
        tableView.reloadData()
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "ListItemCell") as! ListItemCell
        cell.titleLabel.text = items[indexPath.row]["title"]
        cell.dateLabel.text = items[indexPath.row]["date"]
        cell.detailsLabel.text = items[indexPath.row]["details"]
        if (items[indexPath.row]["checked"] == "true") {
            cell.accessoryType = .checkmark
        }
        else {
            cell.accessoryType = .none
        }
        return cell
    }
    
    
    
    func addItemButtonPressed(by controller: AddItemViewController, with item: [String: String]) {
        items.append(item)
        tableView.reloadData()
        dismiss(animated: true, completion: nil)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let destination = segue.destination as! AddItemViewController
        destination.delegate = self
    }
}

