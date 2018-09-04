//
//  ViewController.swift
//  coldcall
//
//  Created by Jeffrey Ding on 9/4/18.
//  Copyright © 2018 Jeffrey Ding. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var nameLabel: UILabel!
    
    @IBAction func coldCallButton(_ sender: UIButton) {
        currentName = Int(arc4random_uniform(6)+1)
        updateUI()
    }
    
    let names = [
        "Ready?",
        "Jeff",
        "Blake",
        "Bryan",
        "Brett",
        "Bryce",
        "Bryan"
    ]
    
    var currentName = 0
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        updateUI()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    func updateUI() {
        nameLabel.text = names[currentName]
    }

}

