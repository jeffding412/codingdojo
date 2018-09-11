//
//  BackViewController.swift
//  Directions
//
//  Created by Jeffrey Ding on 9/10/18.
//  Copyright © 2018 Jeffrey Ding. All rights reserved.
//

import UIKit

class BackViewController: UIViewController {
    @IBOutlet weak var directionLabel: UILabel!
    var direction: String?
    override func viewDidLoad() {
        super.viewDidLoad()
        directionLabel.text = self.direction!
        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    
    @IBAction func dismissButtonPressed(_ sender: UIButton) {
        dismiss(animated: true, completion: nil)
    }
}
