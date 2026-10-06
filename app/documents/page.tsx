import LayoutContainer from "@/components/ui/LayoutContainer"
import PageTopContainer from "@/components/ui/PageTopContainer"
import Title from "@/components/ui/Title"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: "Sauda - Документы",
  description: "Документы ",
};

export default function DocumentsPage(){
    return(
        <LayoutContainer>
            <PageTopContainer>
                <Title text="Документы"/>
            </PageTopContainer>
        </LayoutContainer>
    )
}