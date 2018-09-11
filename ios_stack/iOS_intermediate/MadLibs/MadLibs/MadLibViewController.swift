//
//  MadLibViewController.swift
//  MadLibs
//
//  Created by Jeffrey Ding on 9/10/18.
//  Copyright © 2018 Jeffrey Ding. All rights reserved.
//

import UIKit

protocol MadLibDelegate {
    func sendMadLibs(adjective: String?, verb1: String?, verb2: String?, noun: String?)
}

class MadLibViewController: UIViewController {
    var delegate: MadLibDelegate!
    
    @IBOutlet weak var adjectiveField: UITextField!
    @IBOutlet weak var verb1Field: UITextField!
    @IBOutlet weak var verb2Field: UITextField!
    @IBOutlet weak var nounField: UITextField!
    
    @IBAction func submitButtonPressed(_ sender: UIButton) {
        let adjective = self.adjectiveField.text
        let verb1 = self.verb1Field.text
        let verb2 = self.verb2Field.text
        let noun = self.nounField.text
        delegate.sendMadLibs(adjective: adjective, verb1: verb1, verb2: verb2, noun: noun)
        self.dismiss(animated: true, completion: nil)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
}
