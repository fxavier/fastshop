import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { ProfileForm } from "@/components/profile/profile-form";
import { OrderHistory } from "@/components/profile/order-history";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function ProfilePage() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-3xl font-bold">My Account</h1>
      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="orders">Order History</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <ProfileForm user={user} />
        </TabsContent>
        <TabsContent value="orders">
          <OrderHistory userId={user.id} />
        </TabsContent>
      </Tabs>
    </div>
  );
}