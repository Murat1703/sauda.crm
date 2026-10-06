import LayoutContainer from "@/components/ui/LayoutContainer"
import PageTopContainer from "@/components/ui/PageTopContainer"
import Title from "@/components/ui/Title"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sauda - Объекты",
  description: "Объекты ",
};

export default function ObjectsPage(){
    return(
        <LayoutContainer>
            <PageTopContainer>
                <Title text="Объекты"/>
            </PageTopContainer>
        </LayoutContainer>
    )
}