import Link from "next/link"
import { Bot, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ChatbotsPage() {
  // Sample chatbot data
  const chatbots = [
    {
      id: "1",
      name: "Customer Support Bot",
      description: "Handles customer inquiries and support tickets",
      conversations: 156,
      lastUpdated: "2 days ago",
    },
    {
      id: "2",
      name: "Sales Assistant",
      description: "Helps customers find the right products",
      conversations: 89,
      lastUpdated: "5 days ago",
    },
    {
      id: "3",
      name: "FAQ Bot",
      description: "Answers frequently asked questions",
      conversations: 213,
      lastUpdated: "1 day ago",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Your Chatbots</h1>
          <p className="text-muted-foreground">Manage and customize your AI chatbots</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create New Bot
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {chatbots.map((bot) => (
          <Card key={bot.id} className="overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>{bot.name}</CardTitle>
                  <CardDescription className="line-clamp-1">{bot.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Conversations</p>
                  <p className="font-medium">{bot.conversations}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Last Updated</p>
                  <p className="font-medium">{bot.lastUpdated}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-4">
              <Button variant="outline" size="sm" asChild>
                <Link href={`/dashboard/chatbots/${bot.id}`}>Edit</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href={`/dashboard/chatbots/${bot.id}/analytics`}>Analytics</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
