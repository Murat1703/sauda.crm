import LayoutContainer from "@/components/ui/LayoutContainer"
import PageTopContainer from "@/components/ui/PageTopContainer"
import Title from "@/components/ui/Title"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sauda - Аналитика",
  description: "Аналитика",
};


export default function AnalitycsPage(){
    return(
        <LayoutContainer>
            <PageTopContainer>
                <Title text="Аналитика"/>
            </PageTopContainer>
        </LayoutContainer>
    )
}