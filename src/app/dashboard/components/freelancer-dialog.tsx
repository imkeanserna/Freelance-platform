
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function FreelancerDialog({ children, images, profile, name, skills, rate }: {
    children: any,
    images: string[],
    profile: string,
    name: string,
    skills: string,
    rate: number,
}) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[80%] h-[90%]">
                {/* <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader> */}
                <div className="flex justify-between me-16">
                    <CarouselWorks images={images} />
                    <div className="mt-10">
                        <div className="border-2 rounded-lg shadow-lg overflow-auto">
                            <img src={profile} className="w-80" />
                            <div className="p-6">
                                <div className="flex flex-col gap-4">
                                    <Info name="test@email.com" label={name} />
                                    <Info name={skills} label="Skill" icon={<SkillIcon />} />
                                    <Info name={JSON.stringify(rate)} label="Rate per hour" icon={<RateIcon />} />
                                    <Info name={"Available"} label="Status" icon={<StatusIcon />} />
                                </div>
                                <ActionsButtons name={name} />
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}


function CarouselWorks({ images }: {
    images: string[]
}) {
    return (
        <Carousel className="w-full max-w-xs ms-10">
            <CarouselContent>
                {images.map((value: any, index: number) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <img src={value.image} className="h-full rounded-lg border border-gray-600 shadow-2xl" />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

function Info({ name, label, icon }: {
    name: string,
    label: string,
    icon?: any
}) {
    return <div className="flex gap-3">
        {icon}
        <div>
            <p className="font-medium">{label}</p>
            <p className="text-sm text-gray-500">{name}</p>
        </div>
    </div>
}

function ActionsButtons({ name }: {
    name: string
}) {
    const { toast } = useToast()
    return (
        <div className="mt-8 flex gap-2">
            <SendMessageDialog name={name}>
                <Button variant="outline">
                    <MailCheck className="h-4 w-4 me-2" />
                    Message me
                </Button>
            </SendMessageDialog>
            <Button onClick={() => {
                toast({
                    description: `You book successfully to ${name}.`,
                    className: "py-4 border-gray-500"
                })
            }}>
                <Send className="h-4 w-4 me-2" />
                Book now
            </Button>
        </div>
    )
}

function SendMessageDialog({ children, name }: {
    children: any,
    name: string
}) {
    const { toast } = useToast()

    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Message</DialogTitle>
                    <DialogDescription>
                        Have a conversation to {name} and get request.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid w-full gap-3">
                    <Textarea placeholder="Type your message here." />
                    <DialogClose>
                        <Button type="submit" size="sm" className="px-3"
                            onClick={() => {
                                toast({
                                    description: `Message sent successfully`,
                                    className: "py-4 border-gray-500 bg-green-500"
                                })
                            }}
                        >
                            Send message
                        </Button>
                    </DialogClose>
                </div>
                <DialogFooter className="sm:justify-start">
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}


import { BriefcaseBusiness, DollarSign, MailCheck, MonitorCheck, Send } from 'lucide-react';
import { Textarea } from "@/components/ui/textarea"

const SkillIcon = () => {
    return (
        <BriefcaseBusiness className="w-5" />
    );
};

const RateIcon = () => {
    return (
        <DollarSign className="w-5" />
    );
};

const StatusIcon = () => {
    return (
        <MonitorCheck className="w-5" />
    );
};