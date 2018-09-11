//
//  ViewController.swift
//  MadLibs
//
//  Created by Jeffrey Ding on 9/10/18.
//  Copyright © 2018 Jeffrey Ding. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var madLibLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let destination = segue.destination as! MadLibViewController
        destination.delegate = self
    }
}

extension ViewController: MadLibDelegate {
    func sendMadLibs(adjective: String?, verb1: String?, verb2: String?, noun: String?) {
        print(adjective!)
        print(verb1!)
        print(verb2!)
        print(noun!)
        self.madLibLabel.text = "We are having a perfectly \(adjective!) time now. Later we will \(verb1!) and \(verb2!) in the \(noun!)."
    }
}
