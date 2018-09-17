//
//  FilmViewController.swift
//  StarWarsEncyclopedia
//
//  Created by Jeffrey Ding on 9/17/18.
//  Copyright © 2018 Jeffrey Ding. All rights reserved.
//

import UIKit

class FilmViewController: UIViewController {
    weak var delegate: PersonViewControllerDelegate?
    var filmIndex: String?
    
    @IBOutlet weak var titleLabel: UILabel!
    @IBOutlet weak var releaseDateLabel: UILabel!
    @IBOutlet weak var directorLabel: UILabel!
    @IBOutlet weak var openingCrawlLabel: UILabel!
    override func viewDidLoad() {
        super.viewDidLoad()
        StarWarsModel.getFilmByURL(url: filmIndex!, completionHandler: {
            // see: Swift closure expression syntax
            data, response, error in
            // data -> JSON data, response -> headers and other meta-information, error-> if one occurred
            // "do-try-catch" blocks execute a try statement and then use the catch statement for errors
            do {
                // try converting the JSON object to "Foundation Types" (NSDictionary, NSArray, NSString, etc.)
                if let jsonResult = try JSONSerialization.jsonObject(with: data!, options: JSONSerialization.ReadingOptions.mutableContainers) as? NSDictionary {
                    DispatchQueue.main.async {
                        self.titleLabel.text = (jsonResult["title"] as! String)
                        self.releaseDateLabel.text = (jsonResult["release_date"] as! String)
                        self.directorLabel.text = (jsonResult["director"] as! String)
                        self.openingCrawlLabel.text = (jsonResult["opening_crawl"] as! String)
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
