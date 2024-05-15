import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Send, Star } from "lucide-react"
import { FreelancerDialog } from "./freelancer-dialog"

export function CardFreelancer({ className, img, name, skills, rate, ratings, imagesExperiences }: {
    img: string,
    name: string,
    skills: string,
    rate: number,
    ratings: number,
    className: any,
    imagesExperiences: any
}) {

    return <Card className={cn("overflow-auto", className)}>
        <img src={img} className=" w-full h-45" />
        <CardContent className="pt-4">
            <div className="flex justify-between">
                <p className="font-semibold text-sm">{name}</p>
                <div className="flex items-center">
                    {Array.from({ length: ratings }, (_, key: number) => <IconStar key={key} />)}
                </div>
            </div>
            <p className=" text-[10px] font-light">{skills}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-centers">
            <div className=" text-xs">
                <p className=" text-gray-500">Rate per hour:</p>
                <p className="font-bold">₱ {rate}</p>
            </div>
            <FreelancerDialog
                images={imagesExperiences}
                profile={img}
                name={name}
                skills={skills}
                rate={rate}
                >
                <Button>
                    <Send className="h-4 w-4 me-2" />
                    Book now
                </Button>
            </FreelancerDialog>
        </CardFooter>
    </Card>
}


function IconStar() {
    return <Star className=" fill-black h-4 w-4" />
}
