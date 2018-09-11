//
//  ViewController.swift
//  Directions
//
//  Created by Jeffrey Ding on 9/10/18.
//  Copyright © 2018 Jeffrey Ding. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    var direction: String!
    @IBAction func directionButtonPressed(_ sender: UIButton) {
        self.direction = sender.titleLabel?.text
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let destination = segue.destination as! BackViewController
            destination.direction = self.direction!
    }
}

