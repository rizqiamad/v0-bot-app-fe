import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Bot, MessageSquare, TrendingUp, Users } from "lucide-react"
import { ChatInterface } from "@/components/dashboard/chat-interface"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your chatbot activity.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Total Chatbots",
            value: "3",
            description: "+1 from last month",
            icon: Bot,
            trend: "up",
          },
          {
            title: "Active Conversations",
            value: "245",
            description: "+22% from last month",
            icon: MessageSquare,
            trend: "up",
          },
          {
            title: "Total Users",
            value: "1,234",
            description: "+15% from last month",
            icon: Users,
            trend: "up",
          },
          {
            title: "Avg. Response Rate",
            value: "92%",
            description: "+5% from last month",
            icon: TrendingUp,
            trend: "up",
          },
        ].map((item, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
              <item.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="md:col-span-4">
          <CardHeader>
            <CardTitle>Conversation Analytics</CardTitle>
            <CardDescription>User engagement over the past 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center bg-muted/20 rounded-md">
              <BarChart3 className="h-8 w-8 text-muted-foreground" />
              <span className="ml-2 text-muted-foreground">Analytics Chart</span>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Test Your Chatbot</CardTitle>
            <CardDescription>Try out your chatbot in real-time</CardDescription>
          </CardHeader>
          <CardContent>
            <ChatInterface />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
