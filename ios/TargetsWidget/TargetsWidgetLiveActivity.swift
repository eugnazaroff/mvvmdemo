import ActivityKit
import SwiftUI
import WidgetKit

struct TargetsWidgetAttributes: ActivityAttributes {
  public struct ContentState: Codable, Hashable {
    var targets: [String]
  }

  var name: String
}

struct TargetsWidgetLiveActivity: Widget {
  var body: some WidgetConfiguration {
    ActivityConfiguration(for: TargetsWidgetAttributes.self) { context in
      VStack {
        Text("Select")
        HStack {
          ForEach(context.state.targets, id: \.self) { target in
            Button(target) {}
          }
        }
      }
      .padding(.all)
      .activityBackgroundTint(Color.pink)
      .activitySystemActionForegroundColor(Color.white)
      .activityBackgroundTint(Color.black)

    } dynamicIsland: { _ in
      DynamicIsland {
        DynamicIslandExpandedRegion(.leading) {
          Text("hello")
        }
        DynamicIslandExpandedRegion(.trailing) {
          Text("Trailing")
        }
        DynamicIslandExpandedRegion(.bottom) {
          Text("Bottom")
        }
      } compactLeading: {
        Text("L")
      } compactTrailing: {
        Text("hello")
      } minimal: {
        Text("Hello")
      }
      .widgetURL(URL(string: "http://www.apple.com"))
      .keylineTint(Color.red)
    }
  }
}

private extension TargetsWidgetAttributes {
  static var preview: TargetsWidgetAttributes {
    TargetsWidgetAttributes(name: "Select your target")
  }
}

private extension TargetsWidgetAttributes.ContentState {
  static var select: TargetsWidgetAttributes.ContentState {
    TargetsWidgetAttributes.ContentState(targets: ["Target 1", "Target 2", "Target 3"])
  }
}

#Preview("Notification", as: .content, using: TargetsWidgetAttributes.preview) {
  TargetsWidgetLiveActivity()
} contentStates: {
  TargetsWidgetAttributes.ContentState.select
}
