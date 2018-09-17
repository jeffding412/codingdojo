//
//  PersonViewController.swift
//  StarWarsEncyclopedia
//
//  Created by Jeffrey Ding on 9/17/18.
//  Copyright © 2018 Jeffrey Ding. All rights reserved.
//

import UIKit

class PersonViewController: UIViewController {
    weak var delegate: PersonViewControllerDelegate?
    var characterIndex: Int?
    
    @IBOutlet weak var nameLabel: UILabel!
    @IBOutlet weak var genderLabel: UILabel!
    @IBOutlet weak var birthYearLabel: UILabel!
    @IBOutlet weak var massLabel: UILabel!
    override func viewDidLoad() {
        super.viewDidLoad()
        StarWarsModel.getPersonByID(id: characterIndex!, completionHandler: {
            // see: Swift closure expression syntax
            data, response, error in
            // data -> JSON data, response -> headers and other meta-information, error-> if one occurred
            // "do-try-catch" blocks execute a try statement and then use the catch statement for errors
            do {
                // try converting the JSON object to "Foundation Types" (NSDictionary, NSArray, NSString, etc.)
                if let jsonResult = try JSONSerialization.jsonObject(with: data!, options: JSONSerialization.ReadingOptions.mutableContainers) as? NSDictionary {
                    DispatchQueue.main.async {
                        self.nameLabel.text = (jsonResult["name"] as! String)
                        self.genderLabel.text = (jsonResult["gender"] as! String)
                        self.birthYearLabel.text = (jsonResult["birth_year"] as! String)
                        self.massLabel.text = (jsonResult["mass"] as! String)
                    }
                }
            } catch {
                print(error)
            }
        })
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    @IBAction func backButtonPressed(_ sender: UIButton) {
        dismiss(animated: true, completion: nil)
    }
}
