import LayoutContainer from "@/components/ui/LayoutContainer"
import PageTopContainer from "@/components/ui/PageTopContainer"
import Title from "@/components/ui/Title"
import { Metadata } from "next";
import DealsList from "./_components/DealsList";

export const metadata: Metadata = {
  title: "Sauda - Сделки",
  description: "Сделки ",
};

export default function DealsPage(){
    return(
        <LayoutContainer>
            <PageTopContainer>
                <Title text="Сделки"/>
            </PageTopContainer>
            <DealsList />
        </LayoutContainer>
    )
}