import LayoutContainer from "@/components/ui/LayoutContainer"
import PageTopContainer from "@/components/ui/PageTopContainer"
import Title from "@/components/ui/Title"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sauda - Поставщики",
  description: "Поставщики ",
};

export default function ProvidersPage(){
    return(
        <LayoutContainer>
            <PageTopContainer>
                <Title text="Поставщики"/>
            </PageTopContainer>
        </LayoutContainer>
    )
}