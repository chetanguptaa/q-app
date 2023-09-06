import HistoryCard from '@/components/dashboard/HistoryCard'
import HotTopicsCard from '@/components/dashboard/HotTopicsCard'
import QuizMeCard from '@/components/dashboard/QuizMeCard'
import RecentActivityCard from '@/components/dashboard/RecentActivityCard'
import { getAuthSession } from '@/lib/nextauth'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

export const metadata = {
    title: "Dashboard | Quizzy",
    description: "Quiz yourself on anything!",
};

const DashBoard = async  (props: Props) => {
    const session = await getAuthSession();
    if(!session?.user) {
        redirect('/')
    }
    
    return (
        <main className="p-8 mx-auto max-w-7xl">
          <div className="grid gap-4 mt-4 md:grid-cols-2">
            <QuizMeCard />
            <HistoryCard />
          </div>
          <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
            <HotTopicsCard />
            <RecentActivityCard />
          </div>
        </main>
    );
}

export default DashBoard