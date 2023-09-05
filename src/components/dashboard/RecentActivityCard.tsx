import { Link } from 'lucide-react'
import React from 'react'
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from '../ui/card'
import { getAuthSession } from '@/lib/nextauth'
import { redirect } from 'next/navigation'

type Props = {}

const RecentActivityCard = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/");
  }
  return (
    <Card className="col-span-4 lg:col-span-3">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          <Link href="/history">Recent Activity</Link>
        </CardTitle>
        <CardDescription>
          You have played a total of 7 quizzes.
        </CardDescription>
      </CardHeader>
      <CardContent className="max-h-[580px] overflow-scroll">
        {/* <HistoryComponent limit={10} userId={session.user.id} /> */}
      </CardContent>
    </Card>
  )
}

export default RecentActivityCard