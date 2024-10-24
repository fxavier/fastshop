"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ImageUploadProps {
  value: string[];
  onChange: (value: string[]) => void;
  onRemove: (url: string) => void;
}

export function ImageUpload({ value, onChange, onRemove }: ImageUploadProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // In a real app, upload files to storage and get URLs
      const urls = acceptedFiles.map(
        (file) => URL.createObjectURL(file)
      );
      onChange([...value, ...urls]);
    },
    [onChange, value]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".webp"],
    },
    multiple: true,
  });

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-primary transition-colors"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>Drag & drop images here, or click to select files</p>
        )}
      </div>
      {value.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          {value.map((url) => (
            <div key={url} className="relative group">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={url}
                  alt="Product image"
                  fill
                  className="object-cover"
                />
              </div>
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => onRemove(url)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}