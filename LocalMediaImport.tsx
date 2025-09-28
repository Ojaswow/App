import { useState, useRef } from "react";
import { Upload, FolderOpen, Video, Image, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ImportedFile {
  id: string;
  file: File;
  url: string;
  type: 'video' | 'image';
  name: string;
  size: string;
}

interface LocalMediaImportProps {
  onFilesImported: (files: ImportedFile[]) => void;
  onClose: () => void;
  className?: string;
}

export default function LocalMediaImport({ onFilesImported, onClose, className = "" }: LocalMediaImportProps) {
  const [importedFiles, setImportedFiles] = useState<ImportedFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const processFiles = (files: FileList | File[]) => {
    const validFiles: ImportedFile[] = [];
    
    Array.from(files).forEach((file) => {
      // Check if it's a valid media file
      const isVideo = file.type.startsWith('video/');
      const isImage = file.type.startsWith('image/');
      
      if (isVideo || isImage) {
        const url = URL.createObjectURL(file);
        validFiles.push({
          id: Math.random().toString(36).substr(2, 9),
          file,
          url,
          type: isVideo ? 'video' : 'image',
          name: file.name,
          size: formatFileSize(file.size)
        });
      }
    });

    setImportedFiles(prev => [...prev, ...validFiles]);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      processFiles(files);
    }
    // Reset input value to allow selecting the same file again
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(false);
    
    const files = event.dataTransfer.files;
    if (files && files.length > 0) {
      processFiles(files);
    }
  };

  const removeFile = (id: string) => {
    setImportedFiles(prev => {
      const updated = prev.filter(file => file.id !== id);
      // Revoke object URL to free memory
      const fileToRemove = prev.find(file => file.id === id);
      if (fileToRemove) {
        URL.revokeObjectURL(fileToRemove.url);
      }
      return updated;
    });
  };

  const handleImport = () => {
    onFilesImported(importedFiles);
    onClose();
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm ${className}`}>
      <Card className="glass-dark w-full max-w-2xl max-h-[80vh] m-4 overflow-hidden">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-foreground">Import Local Media</h2>
              <p className="text-sm text-muted-foreground">Add photos and videos from your device</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full"
              data-testid="button-close-import"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Drop Zone */}
          <div
            className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 ${
              isDragOver 
                ? 'border-primary bg-primary/5 glow-cyan' 
                : 'border-border hover:border-primary/50'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="glass rounded-full p-4">
                <Upload className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Drop files here or click to browse
                </h3>
                <p className="text-sm text-muted-foreground">
                  Supports videos (MP4, WebM, AVI) and images (JPG, PNG, GIF)
                </p>
              </div>
              <Button
                onClick={openFileDialog}
                className="glass rounded-full"
                data-testid="button-browse-files"
              >
                <FolderOpen className="w-4 h-4 mr-2" />
                Browse Files
              </Button>
            </div>
          </div>

          {/* File Input (Hidden) */}
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="video/*,image/*"
            onChange={handleFileSelect}
            className="hidden"
            data-testid="input-file-select"
          />

          {/* Imported Files List */}
          {importedFiles.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-medium text-foreground mb-3">
                Selected Files ({importedFiles.length})
              </h3>
              <div className="max-h-40 overflow-y-auto space-y-2">
                {importedFiles.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center space-x-3 p-3 glass rounded-xl"
                  >
                    <div className="flex-shrink-0">
                      {file.type === 'video' ? (
                        <Video className="w-5 h-5 text-primary" />
                      ) : (
                        <Image className="w-5 h-5 text-accent" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {file.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {file.size}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFile(file.id)}
                      className="w-6 h-6 rounded-full"
                      data-testid={`button-remove-${file.id}`}
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-end space-x-3 mt-6">
            <Button
              variant="ghost"
              onClick={onClose}
              data-testid="button-cancel-import"
            >
              Cancel
            </Button>
            <Button
              onClick={handleImport}
              disabled={importedFiles.length === 0}
              className="glow-cyan"
              data-testid="button-import-files"
            >
              Import {importedFiles.length > 0 ? `${importedFiles.length} files` : ''}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}