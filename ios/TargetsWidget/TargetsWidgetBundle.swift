//
//  TargetsWidgetBundle.swift
//  TargetsWidget
//
//  Created by Eugene Nazarov on 29.03.2024.
//

import WidgetKit
import SwiftUI

@main
struct TargetsWidgetBundle: WidgetBundle {
    var body: some Widget {
        TargetsWidget()
        TargetsWidgetLiveActivity()
    }
}
