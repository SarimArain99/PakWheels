import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

function NewsReviews() {
  return (
    <div className="px-20 py-10">
      <h1 className="text-3xl font-bold">News, Reviews & Discussions</h1>
      <Tabs defaultValue="Automotive News" className="w-[600px] mt-10">
        <TabsList className="flex justify-between">
          <TabsTrigger value="Automotive News">Automotive News</TabsTrigger>
          <TabsTrigger value="Cars Reviews">Cars Reviews</TabsTrigger>
          <TabsTrigger value="Discussions">Discussions</TabsTrigger>
        </TabsList>
        <TabsContent value="Automotive News">
          <div className="p-4 space-y-6">
            <div className="flex items-center gap-x-3">
              <Image
                src="/news.jpeg"
                alt=""
                width={1000}
                height={1000}
                className="h-28 w-28 object-cover"
              />
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  Latest Automotive News
                </h2>
                <p>
                  Stay updated with the latest developments in the automotive
                  industry, including new car launches, market trends, and
                  insights from experts.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-3">
              <Image
                src="/news.jpeg"
                alt=""
                width={1000}
                height={1000}
                className="h-28 w-28 object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Electric Cars on the Rise
                </h3>
                <p>
                  Electric vehicle sales are skyrocketing as governments push
                  for greener policies. Learn how this affects the future of
                  transportation.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-3">
              <Image
                src="/news.jpeg"
                alt=""
                width={1000}
                height={1000}
                className="h-28 w-28 object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Autonomous Driving Updates
                </h3>
                <p>
                  Major breakthroughs in self-driving technology are reshaping
                  the automotive industry. Discover the latest advancements and
                  challenges.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="Cars Reviews">
          <div className="p-4 space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Comprehensive Car Reviews
              </h2>
              <p>
                Explore in-depth reviews of the latest cars, covering features,
                performance, fuel efficiency, and more to help you make informed
                decisions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">
                Tesla Model 3 Review
              </h3>
              <p>
                A closer look at the Tesla Model 3&apos;s innovative features,
                performance, and what sets it apart from its competitors.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">
                2024 Toyota Corolla
              </h3>
              <p>
                Discover why the 2024 Toyota Corolla remains a top choice for
                compact car enthusiasts, offering reliability and advanced
                features.
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="Discussions">
          <div className="p-4 space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Join the Discussions
              </h2>
              <p>
                Engage with other car enthusiasts in lively discussions about
                various automotive topics, share your opinions, and seek advice
                from the community.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">
                Best Cars for Families
              </h3>
              <p>
                Share your recommendations and experiences with cars suitable
                for family trips, comfort, and safety.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">
                Electric vs Gasoline Cars
              </h3>
              <p>
                Debate the pros and cons of electric vehicles compared to
                traditional gasoline cars with fellow enthusiasts.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default NewsReviews;
