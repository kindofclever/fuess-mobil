"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Footprints,
  Heart,
  Home,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Timer,
} from "lucide-react";

import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function FuessMobilPage() {
  // Dialog-Form state (nur Client, kein Server nötig)
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const handleMailSubmit = () => {
    const subject = "Termin- oder Kontaktanfrage";
    const body = `Hallo Verena,

ich interessiere mich für eine Fusspflege:

Name: ${name}
Telefon: ${phone}

Nachricht:
${msg}

Liebe Grüsse`;
    window.location.href = `mailto:verena.gufler@fuess-mobil.ch?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-100 via-white to-teal-50">
      <Header />

      {/* HERO */}
      <section className="relative px-6 pt-16 pb-12">
        {/* Soft radial spotlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.25),transparent_60%)]"
        />
        <div className="mx-auto max-w-screen-md text-center">
          <Badge className="bg-emerald-100 text-emerald-700">
            Mobile Fusspflegepraxis
          </Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            fuess-mobil
          </h1>
          <p className="mx-auto mt-4 max-w-prose text-gray-700">
            Professionelle Fusspflege bequem bei dir zu Hause – freundlich,
            zuverlässig und mit{" "}
            <span className="inline-flex items-center gap-1 font-medium">
              Herz <Heart className="h-4 w-4 text-rose-500" />
            </span>
            .
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {/* Termin anfragen → Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="gap-2 bg-emerald-600 hover:bg-emerald-700"
                >
                  Termin anfragen <ArrowRight className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Termin anfragen</DialogTitle>
                  <DialogDescription>
                    Bitte kontaktiere uns mit deinen Wunschdaten – wir melden
                    uns zeitnah.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-3 py-2">
                  <div className="grid gap-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="msg">Nachricht</Label>
                    <Textarea
                      id="msg"
                      rows={4}
                      placeholder="Adresse, Wunschtermin, Besonderheiten…"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                    />
                  </div>
                </div>
                <DialogFooter className="gap-2 sm:gap-3">
                  <Button variant="outline" asChild>
                    <Link href="tel:+41791234567">
                      <Phone className="mr-2 h-4 w-4" />
                      Anrufen
                    </Link>
                  </Button>
                  <Button onClick={handleMailSubmit} className="gap-2">
                    <Mail className="h-4 w-4" />
                    E-Mail senden
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Direktmail */}
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="mailto:verena.gufler@fuess-mobil.ch?subject=Termin%20oder%20Kontaktanfrage">
                <Mail className="h-4 w-4" />
                E-Mail
              </Link>
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-emerald-700">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1">
              <Home className="h-4 w-4" /> Hausbesuche
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1">
              <ShieldCheck className="h-4 w-4" /> Hygienisch & sicher
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1">
              <Timer className="h-4 w-4" /> Pünktlich & verlässlich
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1">
              <Sparkles className="h-4 w-4" /> Pflege mit Gefühl
            </span>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-screen-md bg-emerald-200" />

      {/* MINI FEATURES GRID */}
      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-screen-md grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border bg-white/70 p-4 shadow-sm backdrop-blur">
            <Home className="h-5 w-5 text-emerald-700" />
            <h3 className="mt-2 font-medium">Zu Hause</h3>
            <p className="mt-1 text-sm text-gray-600">
              Behandlung entspannt in deiner gewohnten Umgebung.
            </p>
          </div>
          <div className="rounded-2xl border bg-white/70 p-4 shadow-sm backdrop-blur">
            <Heart className="h-5 w-5 text-emerald-700" />
            <h3 className="mt-2 font-medium">Einfühlsam</h3>
            <p className="mt-1 text-sm text-gray-600">
              Sanft, sorgfältig und auf deine Bedürfnisse abgestimmt.
            </p>
          </div>
          <div className="rounded-2xl border bg-white/70 p-4 shadow-sm backdrop-blur">
            <ShieldCheck className="h-5 w-5 text-emerald-700" />
            <h3 className="mt-2 font-medium">Sicher</h3>
            <p className="mt-1 text-sm text-gray-600">
              Hohe Hygienestandards und professionelle Materialien.
            </p>
          </div>
        </div>
      </section>

      {/* TABS: Leistungen / Preise */}
      <section id="leistungen" className="px-6 pb-10">
        <div className="mx-auto max-w-screen-md">
          <Tabs defaultValue="leistungen" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="leistungen">Leistungen</TabsTrigger>
              <TabsTrigger value="preise">Preise</TabsTrigger>
            </TabsList>

            <TabsContent value="leistungen" className="mt-4">
              <ul className="list-disc space-y-1 pl-4 text-sm text-gray-700">
                <li>Medizinische Fusspflege (Nägel kürzen & formen)</li>
                <li>Hornhaut- & Hühneraugen-Behandlung</li>
                <li>Pflegeberatung & Tipps für zu Hause</li>
              </ul>
            </TabsContent>

            <TabsContent value="preise" className="mt-4">
              <ul className="space-y-1 text-sm text-gray-700">
                <li>Basis-Behandlung (45–60 Min): CHF xx</li>
                <li>Folge-Behandlung (30–45 Min): CHF xx</li>
                <li>Anfahrt in der Region: inklusive</li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-14" id="kontakt">
        <div className="mx-auto max-w-screen-md">
          <h2 className="text-lg font-semibold text-gray-900">FAQ</h2>
          <Accordion type="single" collapsible className="mt-3">
            <AccordionItem value="who">
              <AccordionTrigger>
                Für wen ist fuess-mobil geeignet?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-700">
                Für alle, die bequeme, professionelle Fusspflege zu Hause
                wünschen – z. B. Senior:innen, Menschen mit eingeschränkter
                Mobilität oder einfach für mehr Komfort.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="hygiene">
              <AccordionTrigger>
                Wie stellt ihr Hygiene sicher?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-700">
                Wir arbeiten mit desinfizierten/sterilen Instrumenten,
                Einmalmaterial und klaren Hygienestandards.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="termin">
              <AccordionTrigger>Wie buche ich einen Termin?</AccordionTrigger>
              <AccordionContent className="text-sm text-gray-700">
                Über den Button <strong>„Termin anfragen“</strong> (oben) per
                E-Mail oder telefonisch unter{" "}
                <a className="underline" href="tel:+41791234567">
                  079 123 45 67
                </a>
                .
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer className="px-6 pb-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} fuess-mobil · Fusspflegepraxis mit Herz und
        Fuss 💚
      </footer>
    </main>
  );
}
