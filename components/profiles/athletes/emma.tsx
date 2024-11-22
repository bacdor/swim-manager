import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calendar,
  Book,
  Activity,
  Trophy,
  AlertCircle,
  MapPin,
} from "lucide-react";

const AthleteProfileEmma = () => {
  const athlete = {
    personal: {
      name: "Emma Thompson",
      photo: "/static/emma.webp",
      email: "e.thompson@university.edu",
      phone: "(555) 234-5678",
      residence: "South Campus Apartments, Unit 12B",
      major: "Biomedical Engineering",
      year: "Sophomore",
    },
    emergency: {
      primaryContact: "Jennifer Thompson",
      relationship: "Mother",
      phone: "(555) 345-6789",
      secondaryContact: "David Thompson",
      secondaryRelationship: "Father",
      secondaryPhone: "(555) 456-7890",
    },
    medical: {
      allergies: ["Latex", "Sulfa drugs"],
      conditions: ["Iron deficiency"],
      medications: ["Iron supplements", "Multivitamins"],
      bloodType: "A+",
    },
    athletic: {
      events: ["400m Individual Medley", "200m Butterfly", "800m Freestyle"],
      bestTimes: [
        {
          event: "400m Individual Medley",
          time: "4:38.92",
          date: "2024-03-10",
        },
        { event: "200m Butterfly", time: "2:08.45", date: "2024-02-28" },
        { event: "800m Freestyle", time: "8:32.71", date: "2024-03-15" },
      ],
      trainingGroup: "Distance Group",
      eligibilityStatus: "Eligible",
      academicStanding: "Dean's List",
      yearOfEligibility: "1st",
    },
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header with Photo and Basic Info */}
      <div className="flex items-start gap-6 bg-white p-6 rounded-lg shadow-sm">
        <img
          src={athlete.personal.photo}
          alt={athlete.personal.name}
          className="w-32 h-32 rounded-full object-cover border-4 border-purple-500"
        />
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">{athlete.personal.name}</h1>
          <div className="flex gap-4 text-gray-600">
            <span>{athlete.personal.major}</span>
            <span>•</span>
            <span>{athlete.personal.year}</span>
            <span>•</span>
            <span>{athlete.athletic.trainingGroup}</span>
          </div>
          <div className="flex gap-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
              {athlete.athletic.eligibilityStatus}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800">
              {athlete.athletic.academicStanding}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Book className="h-5 w-5" />
              Academic & Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-500">Email</label>
                <div>{athlete.personal.email}</div>
              </div>
              <div>
                <label className="text-sm text-gray-500">Phone</label>
                <div>{athlete.personal.phone}</div>
              </div>
              <div className="col-span-2">
                <label className="text-sm text-gray-500">
                  Campus Residence
                </label>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  {athlete.personal.residence}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contacts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Emergency Contacts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="font-medium">
                {athlete.emergency.primaryContact} (
                {athlete.emergency.relationship})
              </div>
              <div>{athlete.emergency.phone}</div>
            </div>
            <div>
              <div className="font-medium">
                {athlete.emergency.secondaryContact} (
                {athlete.emergency.secondaryRelationship})
              </div>
              <div>{athlete.emergency.secondaryPhone}</div>
            </div>
          </CardContent>
        </Card>

        {/* Athletic Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Athletic Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-500">Events</label>
                <div className="flex flex-wrap gap-2">
                  {athlete.athletic.events.map((event) => (
                    <span
                      key={event}
                      className="px-2 py-1 bg-purple-50 text-purple-700 rounded-md text-sm"
                    >
                      {event}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-500">
                  Personal Best Times
                </label>
                <div className="space-y-2">
                  {athlete.athletic.bestTimes.map((record) => (
                    <div
                      key={record.event}
                      className="flex justify-between items-center"
                    >
                      <span>{record.event}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{record.time}</span>
                        <span className="text-sm text-gray-500">
                          ({new Date(record.date).toLocaleDateString()})
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Medical Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Medical Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-500">Allergies</label>
                <div className="flex flex-wrap gap-2">
                  {athlete.medical.allergies.map((allergy) => (
                    <span
                      key={allergy}
                      className="px-2 py-1 bg-red-50 text-red-700 rounded-md text-sm"
                    >
                      {allergy}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-500">
                  Medical Conditions
                </label>
                <div className="flex flex-wrap gap-2">
                  {athlete.medical.conditions.map((condition) => (
                    <span
                      key={condition}
                      className="px-2 py-1 bg-yellow-50 text-yellow-700 rounded-md text-sm"
                    >
                      {condition}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-500">Medications</label>
                <div className="flex flex-wrap gap-2">
                  {athlete.medical.medications.map((medication) => (
                    <span
                      key={medication}
                      className="px-2 py-1 bg-green-50 text-green-700 rounded-md text-sm"
                    >
                      {medication}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-500">Blood Type</label>
                <div className="font-medium">{athlete.medical.bloodType}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AthleteProfileEmma;
